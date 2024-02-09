import Vapi from './../components/vapi'

export default function Home() {
  return (
    <main>
      <section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-lime-500">Vapi <span className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl text-red-700"><span className="text-stone-100">x</span> Twilio Flex</span></h1>
            <br className="hidden lg:block my-8"/>
            <h2 className="max-w-lg text-lg font-bold leading-none tracking-tighter md:text-3xl lg:text-3xl lg:max-w-3xl text-gray-500"> empower your call center</h2>
            <Vapi/>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
  );
}


