"use client";


const features = [
  {
    title: "Experienced, versatile team",
    iconUrl: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Team.png",
  },
  {
    title: "End-to-end support",
    iconUrl: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Help.png",
  },
  {
    title: "Agile, transparent processes",
    iconUrl: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Process.png",
  },
  {
    title: "Scalable, cloud-native mindset",
    iconUrl: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Collaborate.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-8 text-center text-black bg-white flex flex-col gap-9">
      <h2 className="text-3xl lg:text-4xl font-bold lg:mb-6">
        Why Choose <span className="text-[#6dc1fc]">Rainesoft</span>
      </h2>

      <div className="lg:flex items-center">
       <div className="lg:w-1/2">
        <div className="text-left max-w-md">
          <p className="text-gray-600 text-lg leading-relaxed lg:text-[20px] mb-9 lg:mb-0">
            Choosing the right tech partner is key to building lasting solutions.
            At Rainesoft, we take the time to understand your goals, challenges,
            and vision—so we can craft systems that not only solve problems, but
            also unlock new opportunities. Our commitment goes beyond just
            delivering features; we’re here to create value at every step.
          </p>
        </div>

        <div className="max-w-sm">
          <img
            src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Choose.png"
            alt="Choose Rainesoft"
            width={400}
            height={400}
            className="hidden lg:block rounded-lg"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:mb-12 items-center ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#6dc1fc] text-white rounded-lg px-5 py-9 shadow-md flex flex-col items-center"
          >
            <img
              src={feature.iconUrl}
              alt={feature.title}
              width={90}
              height={50}
              className="mb-4 border rounded-full p-3 bg-white"
            />
            <h3 className="text-[17px] font-bold text-black">{feature.title}</h3>
          </div>
        ))}
      </div>

      </div>

      <a
              href="/contact"
              className="border border-[#6DC1FC] hover:shadow-md px-3 py-2 rounded-md lg:w-[15%] mx-auto"
            >
              Let's Chat
            </a>
    </section>
  );
}
