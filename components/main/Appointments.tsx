import React from "react";

function Appointments() {
  return (
    // <section className="relative border-[1px] border-[#f8bbd0] mt-10 p-5">
    <section className="relative mt-5 p-5">
      <h2 className="text-center text-5xl font-playfair italic capitalize text-[#f1cc85]">
        Before & after your Appointment
      </h2>
      <div className="flex mt-5 gap-10">
        <div className="w-[50%] bg-purple-100 p-5 rounded-md">
          <h3 className="text-center text-4xl font-playfair italic">Before</h3>
          <div className="text-md text-center m-5 italic ">
            <p className="mb-2 p-2 border-b-[1px] border-white">
              No striplashes or mascara 48 hours before your appointment.
              Residue of those products make it super hard for the eyelash
              extensions to stick properly
            </p>
            <p className="mb-2 p-2 border-b-[1px] border-white">
              Do not wear any makeup to your appointment Your eyelashes need to
              be clean for a proper application
            </p>
            <p className="mb-2 p-2 ">
              Wear comfy clothes as this service takes anywhere from 2-3 hours.
              The room can get a bit cold, especially during winter. Blancket
              can be provided, but be welcome on bringing your own if that is
              what you prefer
            </p>
            {/* <div>
              {" "}
              <h3 className="text-2xl underline-offset-8 underline decoration-[#e1bee7] decoration-1 mb-5 font-medium">
                Extra Information
              </h3>
              <p className="pb-1 border-b-[1px] border-white">
                Mental health is important, it can be so daunting going into
                someone's home & being alone in a room with someone you might
                hardly know for a few hours.
              </p>
              <p className="py-1 border-b-[1px] border-white">
                All needed is to communicate that you will like a "silent
                appointment."
              </p>
              <p className="py-1 border-b-[1px] border-white">
                This gives you time to relax while I concentrate on your lashes.
                There will be no judgement, as it is extremely important to take
                time out for self-care
              </p>
              <p className="py-1 ">
                I want your lash experience to be how YOU want it. You can let
                me know through Direct Message when scheduling your appointment
                and no questions will be asked.
              </p>
            </div> */}
          </div>
        </div>
        <div className="w-[50%] bg-blue-100  p-5 rounded-md">
          <h3 className="text-center text-4xl font-playfair italic">After</h3>
          <div className="text-md text-center m-5 italic">
            <p className="mb-2 p-2 border-b-[1px] border-white">
              Please be aware: you cannot shower/wet your lashes the first 24
              hours after your appointment
            </p>
            <p className="mb-2 p-2 border-b-[1px] border-white">
              No pulling, touching, or rubbing your lashes
            </p>
            <p className="mb-2 p-2 border-b-[1px] border-white">
              Do not wear any makeup/products around the eyes that contain oils.
              These products break the glue, bad retention
            </p>
            <p className="mb-2 p-2 border-b-[1px] border-white">
              No mascara or eyelash curler on your lashes
            </p>
            <p className="mb-2 p-2 border-b-[1px] border-white">
              After the 24 hour mark of getting your lashes done, please wash
              your lashes 1-2 times daily. It is crucial that your lashes are
              clean so that they are healthy & better retention
            </p>
            <p className="mb-2 p-2">
              Do not sleep on your face or side as the pillow will put out the
              lash extensions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointments;
