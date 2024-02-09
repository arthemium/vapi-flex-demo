import twilio from 'twilio';

const accountSid: string = process.env.TWILIO_ACCOUNT_SID ?? "";
const authToken: string = process.env.TWILIO_AUTH_TOKEN ?? "";
const workspaceSid: string = process.env.TWILIO_WORKSPACE_ID ?? "";
const assignToAnyoneWorkflow = "WW2998cfb7095cfe11322e4a98eafeb025";

const client = twilio(accountSid, authToken);


export default async function handler(req: any, res: any) {
    console.log(req.body);
  const task = await client.taskrouter.v1.workspaces(workspaceSid).tasks.create(
    {
      attributes:
        JSON.stringify({conversation: req.body}), 
        workflowSid: assignToAnyoneWorkflow
    });
    res.status(200).json({ taskId: task.sid })    
}
