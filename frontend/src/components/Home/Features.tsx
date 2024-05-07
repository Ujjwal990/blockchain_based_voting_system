import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Why blockchain</div>
      <div className="title-small">
      Because of secure, transparent, and tamper-proof record-keeping of votes.
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
            In the context of voting, immutability refers to the permanent and unchangeable nature of recorded votes within a blockchain system. Once a vote is cast and recorded on the blockchain, it becomes part of a chain of blocks that are linked together cryptographically. This ensures that the integrity of the voting process remains intact, as it prevents any unauthorized alterations or tampering with the recorded votes. Immutability provides voters with confidence that their votes cannot be altered or manipulated after they have been cast, thereby upholding the transparency and fairness of the electoral process.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            Utilizing blockchain technology in voting applications enhances security by implementing robust cryptographic techniques and consensus mechanisms. Each vote is encrypted and securely stored within the blockchain network, making it extremely difficult for unauthorized parties to access or manipulate the voting data. Additionally, blockchain's decentralized nature reduces the risk of a single point of failure or hacking, as the data is distributed across multiple nodes within the network. This heightened level of security instills trust among voters, ensuring the confidentiality and integrity of their voting information throughout the electoral process.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            Decentralization in voting applications implies that there is no central authority or intermediary controlling the entire voting process. Instead, the voting system operates on a distributed network of nodes, where each node maintains a copy of the blockchain ledger containing all recorded votes. This decentralization eliminates the need for a trusted third party, such as a government or election commission, to oversee the voting process, reducing the potential for bias or manipulation. By distributing control and verification across multiple participants in the network, decentralization promotes transparency, accountability, and inclusivity in the electoral system.


            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
            A distributed ledger, inherent to blockchain technology, serves as a comprehensive and transparent record of all voting transactions conducted within the network. Each vote is recorded as a block on the ledger, which is linked to previous blocks through cryptographic hashes, creating an immutable and chronological chain of voting data. This distributed ledger enables real-time verification and auditing of the voting process by all participants in the network, ensuring transparency and accountability. Moreover, the decentralized nature of the ledger enhances resilience against data manipulation or tampering, as any unauthorized changes would require consensus among the majority of network participants, further safeguarding the integrity of the electoral process.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
