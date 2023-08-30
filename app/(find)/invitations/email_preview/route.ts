import { getProfile } from "@/lib/actions/profile/get-update-profile";

export async function GET() {
  const profile = await getProfile();
  const username = profile.username;

  return new Response(
    `<!doctype html>
<html>
  <title>Twitter Email Preview</title> 
  <body style="font-family: monospace;">
    <div>
      <strong>From:</strong> ${username}
    </div>
    <div>
      <strong>Subject:</strong> ${username} wants to keep up with you on Twitter
    </div>
    <p>
      To find out more about Twitter, visit the link below:<br />
      http://twitter.com/i/deafe017142140db7044566433da2c1d176ca9b9
    </p>
    <p>
      Thanks,<br />
      -The Twitter Team
    </p>
    <p>About Twitter</p>
    <p>
      Twitter is a unique approach to communication and networking based on the simple concept of status. What are you doing? What are your friends doing-right now? With Twitter, you may answer this question over SMS, IM, or the Web and the responss are shared between contacts. 
    </p>
  </body>
</html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}
