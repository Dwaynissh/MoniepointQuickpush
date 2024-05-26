import { MdOutlinePayment } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col bg-gray-100">
      <div className="min-h-[72%] w-[88%] md:w-[60%] lg:w-[50%] bg-white shadow-lg p-[30px] md:p-[50px] rounded-[5px]">
        <div className="w-full mb-[30px] flex justify-center items-center">
          <iframe
            src="https://lottie.host/embed/a0fbd354-5df1-43ec-a15c-040fa47c2706/N3coVG0nTi.json"
            style={{ height: "80px" }}
          ></iframe>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full mb-[25px] flex justify-between items-center">
            <div>
              <h1 className="text-[25px] md:text-[28px] lg:text-[34px] font-bold">
                Customer Reciept
              </h1>
              <h4 className="font-medium italic">
                Your school fee payment is{" "}
                <span className="text-green-500">confirmed</span>
              </h4>
            </div>
            <div>
              <MdOutlinePayment className="text-[25px]" />
            </div>
          </div>
          <div className="w-full mb-[10px] flex items-center flex-col">
            <div className="w-full mb-2 flex justify-between items-center">
              <div>Name</div>
              <div className="font-bold text-end">John Prince</div>
            </div>
            <div className="w-full mb-2 flex justify-between items-center">
              <div>Reference number</div>
              <div className="font-bold text-end">icy9ma6jd1</div>
            </div>
            <div className="w-full mb-2 flex justify-between items-center">
              <div>Payment Channel</div>
              <div className="font-bold text-end">Card</div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>Currency</div>
              <div className="font-bold text-end">NGN</div>
            </div>
          </div>
          <div className="w-full border my-[10px]"></div>
          <div className="w-full mb-[10px] flex justify-between items-center">
            <div>
              <div>Paid at</div>
              <div className="font-bold">2016-09-29(moment)</div>
            </div>
            <div>
              <div className="text-end">Created at</div>
              <div className="font-bold text-end">2016-09-29(moment)</div>
            </div>
          </div>
          <div className="w-full border my-[10px]"></div>
          <div className="w-full my-[10px] flex items-center flex-col">
            <div className="w-full mb-2 flex justify-between items-center">
              <div>Email</div>
              <div className="font-bold text-end">customer@test.com</div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>School Name</div>
              <div className="font-bold text-end">tosfadun demo</div>
            </div>
            <div className="w-full mt-[40px] flex justify-between items-center">
              <div className="font-bold text-[22px] uppercase ">Amount</div>
              <div className="font-bold text-[22px] text-green-500 text-end">
                ₦889.93
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[20px] flex justify-center items-center gap-10">
        <div className="py-2 px-3 bg-blue-950 text-white flex items-center gap-2 rounded-lg cursor-pointer">
          <div>Download Reciept</div>
          <GrDownload />
        </div>
        <NavLink to="" className="i underline text-blue-950 text-[18px]">
          <div>Back to dashboard</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Payment;
