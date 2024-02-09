import Vapi from '@vapi-ai/web';

const vapiKey = process.env.VAPI_KEY ?? "";
const vapi = new Vapi(vapiKey);

let customerIssue: any[] = [];

const createTask = async (data: any[]) => {
  const newTask = await fetch('http://localhost:3000/api/newtask', {
      method: "POST",
      body: JSON.stringify(data),
  });
  console.log(newTask)
}

const prompt = `You are frontline support agent, you name is Jake. \
\ you should focus on asking the customer two main questions. 
\ what is the issue they are facing and collect the OS, system parameters and when the issue started
\ try to give the customer few advices, however, be short and if it doesn't help, pass it to backline support.
\ try to sounds as human as possible, possibly adding 'um' or very short pauses so it will look like you are thinking.
`

const startConvo = async () => {
    vapi.start({
        model: {
          provider: "openai",
          model: "gpt-3.5-turbo",
          systemPrompt: prompt
        },
         voice: {
          provider: "11labs",
          voiceId: "burt",
        },
        endCallFunctionEnabled: true
      });
}

const endCall = async () => {
  vapi.stop();
}



vapi.on('message', (message) => {
  if(message.role === 'user' && message.type === 'transcript' && message.transcriptType === 'final')  {
    console.log(message);
    customerIssue.push(message.transcript);
  }
  });

vapi.on('call-end', () => {
  createTask(customerIssue)
})

export default function VapiButton() {
    return (
      <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
      <div className="mt-3 rounded-lg sm:mt-0">
        <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 lg:px-10 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={startConvo}>Start Call</button>
      </div>
      <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
        <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-red-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={endCall}>End Call</button>
      </div>
    </div>
      );
  }
  
