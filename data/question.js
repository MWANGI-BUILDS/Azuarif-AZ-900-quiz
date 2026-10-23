const QUESTIONS = [
  {
    id: "cc-001",
    topic: "Cloud Concepts",
    question: "In an Infrastructure as a Service (IaaS) model, who is responsible for patching the guest operating system of a virtual machine?",
    options: ["Microsoft", "The customer", "Both equally, for everything", "The internet service provider"],
    answer: 1,
    explanation: "Under the shared responsibility model, IaaS leaves the guest OS, applications and data with the customer. Microsoft manages the physical datacenter, network and host infrastructure.",
    whyWrong: [
      "Microsoft handles the physical hosts and datacenter, not the OS inside your VM.",
      "",
      "Responsibility is shared, but not equally for everything. It depends on the service model.",
      "Your internet provider has no role in patching an Azure VM."
    ],
    africanExample: "It is like renting an apartment in Nairobi: the landlord maintains the building and the gate, but you look after your own furniture and keep your own door locked."
  },
  {
    id: "cc-002",
    topic: "Cloud Concepts",
    question: "An online shop has heavy traffic in December and very little in March. Which cloud benefit lets resources automatically grow and shrink with demand?",
    options: ["Elasticity", "Fixed capital expenditure", "Physical isolation", "Manual provisioning"],
    answer: 0,
    explanation: "Elasticity means resources scale out or in automatically as demand changes, so you pay only for what you need at the time.",
    whyWrong: [
      "",
      "Cloud shifts spending from capital expenditure (CapEx) to operational expenditure (OpEx), so fixed CapEx is the opposite.",
      "Physical isolation is about separating hardware, not adjusting capacity to demand.",
      "Manual provisioning is the opposite of automatic scaling."
    ],
    africanExample: "A matatu SACCO puts extra vehicles on the road on a busy Friday evening and sends them back to the depot when the rush is over."
  },
  {
    id: "arch-001",
    topic: "Azure Architecture and Services",
    question: "What is an Azure availability zone?",
    options: [
      "Two regions paired together far apart",
      "A billing boundary for resources",
      "A logical container used to group resources",
      "A physically separate location within a region, with independent power, cooling and networking"
    ],
    answer: 3,
    explanation: "Availability zones are physically separate locations inside one Azure region. If one zone fails, the others can keep your app running.",
    whyWrong: [
      "That describes a region pair, which links two regions, not a zone inside a region.",
      "That describes a subscription, which is a billing and access boundary.",
      "That describes a resource group, which organises resources logically.",
      ""
    ],
    africanExample: "A supermarket chain has branches in different parts of Nairobi, each with its own generator, so a blackout in one area does not close the whole business."
  },
  {
    id: "arch-002",
    topic: "Azure Architecture and Services",
    question: "Which Azure service is best suited to storing large amounts of unstructured data such as images and videos?",
    options: ["Azure SQL Database", "Azure Blob Storage", "Azure Monitor", "Azure Virtual Network"],
    answer: 1,
    explanation: "Azure Blob Storage is built for massive amounts of unstructured data like images, videos, documents and backups.",
    whyWrong: [
      "Azure SQL Database stores structured, relational data in tables.",
      "",
      "Azure Monitor collects and analyses telemetry. It does not store media files.",
      "Azure Virtual Network provides private networking, not file storage."
    ],
    africanExample: "A wedding photographer keeps thousands of photos and videos in a big store room of labelled boxes, instead of writing each one into a customer ledger."
  },
  {
    id: "gov-001",
    topic: "Management and Governance",
    question: "You want to stop anyone, even a user with the Owner role, from accidentally deleting a production resource group. Which feature should you use?",
    options: ["Azure Policy", "Azure Advisor", "Tags", "Resource locks"],
    answer: 3,
    explanation: "A resource lock (CanNotDelete or ReadOnly) applies regardless of a user's permissions, so even an Owner must remove the lock before deleting the resource.",
    whyWrong: [
      "Azure Policy enforces rules on resource properties, such as allowed regions. It is not the tool for delete protection.",
      "Azure Advisor gives recommendations. It does not block actions.",
      "Tags are labels for organising and billing. They do not prevent deletion.",
      ""
    ],
    africanExample: "It is like a lock on a cabinet of title deeds: staff with access to the room still cannot remove the files until the lock is deliberately taken off."
  }
];