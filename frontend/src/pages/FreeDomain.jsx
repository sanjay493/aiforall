import CodeBlock from "../components/CodeBlock";

import duckdns from "../assets/image/freedomain/duckdns.png";

export default function FreeDomain() {
    return (
		<div className="space-y-8">
			<section>
				<h2 className="text-2xl font-bold mb-4">Free Domain from DuckDSN</h2>
				<p className=" mb-4">Follow this step-by-step tutorial to get and set up a free domain from DuckDSN for your Oracle Cloud VM instance.</p>	
			<p className=" mb-4">DuckDNS is a free dynamic DNS service that allows you to create a custom domain name and point it to your Oracle Cloud VM instance's public IP address. This is especially useful if your VM instance has a dynamic IP address that may change over time.</p>
			
			</section>

			<section>
				<h3 className="text-xl font-semibold mb-4">Step 1: Go to: <a href="https://www.duckdns.org/" className="text-blue-400 hover:underline">DuckDNS</a></h3>
				<p className=" mb-4">Login using Google/Github. After login you will be redirected to your dashboard where you can create a new domain.</p>
				<p className=" mb-4">Enter your desired subdomain name in the "Subdomains" field and click the "add domain" button.</p>

				<p className=" mb-4"> Add Oracle IP <address>your_oracle_ip</address>,("yourdomain.duckdns.org") as you will need it to point to your Oracle Cloud VM instance.</p>
			   <img src={duckdns} alt="DuckDNS Dashboard" className="my-4 rounded-lg shadow" />
			   
			   <p className=" mb-4"> On your Oracle VM run the terminal command.	</p>
			   
			   <CodeBlock code={`nano ~/duckdns.sh`} language="bash" />
			   <p className=" mb-4">This will open a new file in the nano text editor. Add the following line to the file:</p>
			   <CodeBlock code={`echo url="https://www.duckdns.org/update?domains=yourdomain&token=your_token&ip=" | curl -k -o ~/duckdns/duck.log -K -`} language="bash" />
			   <p className=" mb-4">Replace "yourdomain" with your actual subdomain and "your_token" with the token provided in your DuckDNS dashboard.</p>
			   <p className=" mb-4">Make the script executable by running the command: </p>
				
				<CodeBlock code={`chmod +x ~/duckdns.sh`} language="bash" />
			   <p className=" mb-4">To automate the update process, you can set up a cron job. Run the command: </p>
				<CodeBlock code={`crontab -e`} language="bash" />
				<p className=" mb-4">Add the following line to run the script every 5 minutes:</p>
			   <CodeBlock code={`*/5 * * * * ~/duckdns.sh`} language="bash" />
			   <p className=" mb-4">Save the file and exit the editor. Your Oracle Cloud VM instance will now automatically update your DuckDNS domain with its current IP address every 5 minutes.</p>
			
				<p className=" mb-4">You can verify that your domain is correctly pointing to your Oracle Cloud VM instance by pinging your DuckDNS domain or accessing it via a web browser if you have a web server running on your VM.</p>
				
			
			</section>

			
		</div>
	);
}