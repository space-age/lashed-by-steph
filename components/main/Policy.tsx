import React from "react";

function Policy() {
  return (
    <section className="relative mt-5 p-5">
      <h2 className="text-center text-5xl font-playfair italic capitalize text-[#f1cc85]">
        Policy & Booking
      </h2>
      <div className="flex flex-col md:flex-row mt-5 gap-5 md:gap-10">
        <div className="w-full md:w-[50%] border-[2px] border-[#bbdefb] sm:p-5 py-5 px-2 rounded-md italic text-center">
          <h3 className="text-4xl font-playfair">Policy</h3>
          <div className="text-md mx-5 mb-5 border-b-[1px] border-[#bbdefb] sm:p-4 ">
            <h4 className="text-2xl underline-offset-8 underline decoration-[#bbdefb] decoration-1 mb-5 font-medium">
              Client has a 10 minutes grace period
            </h4>
            <p>
              Please take into consideration the time it takes to walk to the
              lash room & the time to get started. This means client should not
              arrive any later than 7 minutes after the appointment time.
              Anything after 7 minutes, appointment will be cancel.
            </p>
            <p className="font-semibold mt-2 p-2">
              Remember, Communication is key!
            </p>
          </div>
          <p className="px-4 pb-4">
            Apologies for the inconvenience but cannot continue to be lenient.
            Unfortunately, my time has not always been respected, and their are
            more appointments scheduled.
          </p>
          <p>
            Will need time to completely disinfect/sanitize, and do not believe
            it is fair to have the next client waiting.
          </p>
        </div>
        <div className="w-full md:w-[50%] border-[2px] border-[#e1bee7] sm:p-5 py-5 px-2 rounded-md italic text-center">
          <h3 className="text-4xl font-playfair">Booking</h3>
          <div className="text-md mx-5 mb-5 border-b-[1px] border-[#e1bee7] sm:p-4">
            <p className="mb-2 p-2 ">
              $20 NON-REFUNDABLE deposit is required to book through ZELLE. It
              will go towards service. Remainder balance is due in CASH ONLY!!!
            </p>
            <p className="mb-2 p-2 ">
              Confirmation text will always be sent the early morning on the day
              before your appointment. Appointment MUST be confirmed by no later
              than 8pm the day before to not lose your appointment & deposit. If
              no confirmation message received by 8pm, appointment will be
              cancel.
            </p>
            <p className="font-semibold">
              Face masks are required & No extra guests!
            </p>
          </div>
          <div>
            <h3 className="text-2xl underline-offset-8 underline decoration-[#e1bee7] decoration-1 mb-5 font-medium">
              Reschedule & Cancel
            </h3>
            <p className="mb-2 p-2 ">
              Need to reschudle/cancel the appointment at least 48 hours before
              your appointment to not lose your deposit.
            </p>
            <p>
              If reschedule/cancel with less than 48 hours, deposit is
              <span className="font-semibold"> NON-REFUNDABLE!!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Policy;
