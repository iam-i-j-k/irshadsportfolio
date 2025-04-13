import React from 'react'

const QandA = [
    {
        title: "Complexity and Usability",
        description: "vendor may find difficult to learn and navigate, cluttered UI"
    },
    {
        title: "Cost concerns",
        description: "High implementation cost and maintenance cost"
    },
    {
        title: "Technical Problems",
        description: "System downtime, Integration issues"
    },
    {
        title: "Customization and flexibility",
        description: ["A VMS that cannot be customized to meet specific vendor needs.",
                    "Inability to adapt the system to changing business processes or requirements"]
    },
    {
        title: "Communication Barriers",
        description: ["Delays in updates can lead to miscommunication and errors in order processing.",
                    "Vendors might miss important alerts or updates if the notification system is inadequate."]
    },
    {
        title: "Advanced Analytics and Reporting",
        description: ["The ability to generate customizable reports",
                    " Incorporating predictive analytics to help vendors anticipate demand."]
    },
]

const Page5 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-10 gap-20 font-poppins">
        <div className="text-2xl font-poppins">
            <strong>Qualitative research questions</strong>
        </div>        
        <div className="text-2xl font-poppins">
            <strong>What are the key challenges faced by vendors when using the VMS?</strong>
        </div>        
        <div className='flex flex-col space-y-10'>
            {QandA.map((item,index)=>(
                <div key={index} className="flex flex-col gap-5">
                    <div className="text-xl font-poppins">
                        <strong>{index+1}. {item.title}</strong>
                    </div> 
                    <div className="text-lg font-poppins">
                        {Array.isArray(item.description) ? item.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        )) : item.description}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Page5