import CodeBlock from "../components/CodeBlock";

export default function Oracle() {
    return (
		<div className="space-y-8">
			<section>
				<h2 className="text-2xl font-bold mb-4">Oracle Cloud VM Setup</h2>
				<p className="text-gray-700 mb-4">Follow this step-by-step tutorial to set up an Oracle Cloud VM instance.</p>
			</section>

			<section>
				<h3 className="text-xl font-semibold mb-4">Step 1: Instance Creation</h3>
				<p className="text-gray-700 mb-4">Create a new compute instance on Oracle Cloud. </p>
				<img src="/image/oracle/oracle-1.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
			    <p className="text-gray-700 mb-4">Under Image and Shape change OS to Ubuntu 22.04 LTS.</p>

				<img src="/image/oracle/oracle-2.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
				<p className="text-gray-700 mb-4">After selection of OS as Ubuntu scroll down the page and select  chronical Ubuntu 22.04 LTS or any other as per your choise</p>

				<img src="/image/oracle/oracle-3.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
				<p className="text-gray-700 mb-4">After that same version of OS is shown unser Image and Shape section</p>

				<img src="/image/oracle/oracle-4.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
				<p className="text-gray-700 mb-4">Here download SSH private and public key for future use</p>
			
				<img src="/image/oracle/oracle-5.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
				<p className="text-gray-700 mb-4">Lastly your instance is created and ready to use.</p>
				<img src="/image/oracle/oracle-6.png" alt="Oracle Cloud instance creation" className="my-4 rounded-lg shadow" />
			
			
			</section>

			<section>
				<h3 className="text-xl font-semibold mb-4">Step 2: Oracle Firewall Setup - Security List Configuration</h3>
				<p className="text-gray-700 mb-4">Configure the security rules for ingress and egress traffic:</p>
				<ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
					<li>Navigate to <strong>Instances → Security → Security list</strong></li>
					<li>Click on the created security list (e.g., "Default Security List for openvpn-905")</li>
					<li>Configure the <strong>Security Rules</strong> for both Ingress and Egress</li>
					<li>Follow the configuration shown in images oracle-8 and oracle-9 below</li>
				</ol>
				<div className="space-y-4">
					<div>
						<p className="font-semibold text-gray-700 mb-2">Security List Configuration:</p>
						<img src="/image/oracle/oracle-8.png" alt="Oracle Security List Configuration - Part 1" className="my-4 rounded-lg shadow" />
						<img src="/image/oracle/oracle-9.png" alt="Oracle Security List Configuration - Part 2" className="my-4 rounded-lg shadow" />
					</div>
				</div>
			</section>

			<section>
				<h3 className="text-xl font-semibold mb-4">Step 3: Network Security Groups Configuration</h3>
				<p className="text-gray-700 mb-4">Additionally, configure the Network Security Group:</p>
				<ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
					<li>Navigate to <strong>Instances → Security → Network Security Groups</strong></li>
					<li>Click on the created list (e.g., "ig-quick-action-NSG")</li>
					<li>Apply the configuration changes as shown in image oracle-10 below</li>
				</ol>
				<img src="/image/oracle/oracle-10.png" alt="Oracle Network Security Groups Configuration" className="my-4 rounded-lg shadow" />
			</section>

			<section>
				<h3 className="text-xl font-semibold mb-4">Summary</h3>
				<p className="text-gray-700">Once you've completed all three steps, your Oracle Cloud VM instance will be properly configured with the necessary firewall and security rules to allow appropriate traffic flow to your application.</p>
			</section>
		</div>
	);
}