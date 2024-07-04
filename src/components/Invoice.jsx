import axios from "axios";
import React from "react";
import { FaExpandAlt } from "react-icons/fa";
import { MdOutlineRestartAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import PdfViewerComponent from "./PdfViewerComponent";
// import pdf from "../assets/dummy.pdf";

class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alternatePayee1: "",
      alternatePayee2: "",
      city: "",
      street: "",
      country: "",
      bankKey: "",
      bankAccNo: "",
      reference: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      alternatePayee1,
      alternatePayee2,
      city,
      street,
      country,
      bankKey,
      bankAccNo,
      reference,
    } = this.state;

    const payeeDetails = {
      alternatePayee1,
      alternatePayee2,
      city,
      street,
      country,
      bankKey,
      bankAccNo,
      reference,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/invoices",
        payeeDetails
      );

      if (response.status === 201) {
        // console.log("Payee details saved successfully!");
        toast.success("Payee details saved successfully!");

        this.setState({
          alternatePayee1: "",
          alternatePayee2: "",
          city: "",
          street: "",
          country: "",
          bankKey: "",
          bankAccNo: "",
          reference: "",
        });
      } else {
        // console.error("Failed to save payee details.");
        toast.error("Failed to save payee details.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    
    return (
      <div className="flex">
        <div className="w-[50%] h-screen">
          {" "}
          hello
          <iframe src={"https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"} width="100%" height="1500px" />
          <button onClick={this.handleDownload}>Download PDF</button>
        </div>
        <div className="relative container m-2 px-4 py-8 h-auto w-[50%]">
          <Toaster position="top-center" reverseOrder={false} />
          <div className="fixed w-full flex justify-between items-center border-b-2 border-gray-200 top-0 left-0 right-0 h-[60px] bg-white ">
            <div className="w-[80%]" />
            <div className="w-[10%]">
              <button
                onClick={this.handleSubmit}
                className="border rounded-md p-2 hover:bg-gray-300"
              >
                Save to Draft
              </button>
            </div>
          </div>
          <div className="mt-[60px] w-full">
            <div className="flex mb-4">
              <div className="text-2xl font-bold text-purple-900 pl-2">
                - Invoice Details
              </div>
              <div className="text-2xl pl-6">Action History</div>
            </div>
            <div className="rounded-lg px-4 py-4">
              <div className="font-medium mb-2 bg-gray-300 p-4 text-start">
          *-      INVOICE AMOUNT DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start pl-2">
                <div className="text-gray-700 mt-4">
                  Currency <span className="text-red-600">*</span> :
                </div>
                <div>INR</div>
                <div className="text-gray-700">
                  Inv Basic Amt<span className="text-red-600">*</span> :
                </div>
                <div>₹15,000.00</div>
                <div className="text-gray-700">
                  Inv Tax Amt<span className="text-red-600">*</span> :
                </div>
                <div>₹1,000.00</div>
                <div className="text-gray-700">
                  Total Inv Amt [Inclu. of tax]{" "}
                  <span className="text-red-600">*</span> :
                </div>
                <div>₹16,000.00</div>
                <div className="text-gray-700">
                  Advance Paid <span className="text-red-600">*</span> :
                </div>
                <div>₹0.00</div>
                <div className="text-gray-700">
                  TCS Applicable <span className="text-red-600">*</span> :
                </div>
                <div>
                  <input type="radio" className="checkbox" name="checkbox" />
                  <span className="ml-2 mr-4 text-gray-700">Yes</span>
                  <input type="radio" className="checkbox" name="checkbox" />
                  <span className="ml-2 text-gray-700">No</span>
                </div>
                <div className="text-gray-700">
                  Net Payable Amt [Exclu. of TDS]{" "}
                  <span className="text-red-600">*</span> :
                </div>
                <div>₹16,00.00</div>
              </div>
            </div>

            <form
              className="rounded-lg px-4 py-4 mt-4"
              onSubmit={this.handleSubmit}
            >
              <div className="font-medium mb-2 bg-gray-300 p-4 text-start">
                ALTERNATE PAYEE DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start pl-2">
                <div className="text-gray-700 mt-4">Alternate Payee 1: </div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="alternatePayee1"
                    value={this.state.alternatePayee1}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Alternate Payee 2: </div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="alternatePayee2"
                    value={this.state.alternatePayee2}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">City: </div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Street: </div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="street"
                    value={this.state.street}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Country: </div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Bank Key / IFSC Code :</div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="bankKey"
                    value={this.state.bankKey}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Bank Acc No:</div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="bankAccNo"
                    value={this.state.bankAccNo}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-gray-700">Reference:</div>
                <div className="mr-4">
                  <input
                    className="border border-gray-400 rounded-sm px-4 py-2 w-full focus:border-purple-700 focus:outline-none"
                    type="text"
                    name="reference"
                    value={this.state.reference}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
            <div className="rounded-lg px-4 py-4 mt-4">
              <div className="font-medium mb-2 bg-gray-300 p-4 text-start">
                Line Item Details
              </div>
              <div className="flex gap-8 text-2xl m-4">
                <span className="bg-purple-600 p-2 rounded-full">
                  <FaExpandAlt />
                </span>
                <span className="bg-white p-2 rounded-full">
                  <MdOutlineRestartAlt />
                </span>
              </div>
              <div className="bg-gray-100 w-full">
                <div className="flex justify-between p-4 text-black">
                  <div className="border-r-2 border-gray-300 pr-24 ml-4">
                    <div className="flex">
                      <input
                        className="h-6 w-6 text-purple-600 border-gray-300"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="border-r-2 border-gray-300 pr-10">
                    Select Debit
                  </div>
                  <div>Gl Desc</div>
                  <div className="border-r-2 border-gray-300 pr-12">
                    GL Code
                  </div>
                  <div>
                    Text(Do Not enter <br /> Special characters)
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="pr-8 ml-8">
                      <input
                        className="h-6 w-6 text-purple-600 border-gray-300"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-2xl">
                      <MdDelete />
                    </div>
                  </div>

                  <div className="ml-8">
                    <input type="text" />
                  </div>
                  <div className="h-10 ml-8">
                    <input type="text" />
                  </div>
                  <div className="mr-16">123456</div>
                  <div className="mr-2">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end m-4">
                <div className="bg-purple-600 h-8 w-8 rounded-lg text-white">
                  1
                </div>
                <div className="ml-4 border border-gray-300 p-2">
                  <input type="text" placeholder="200/page" />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button className="bg-purple-800 text-white rounded-sm px-4 py-2 mr-4">
                  Calculate
                </button>
                <button className="bg-purple-800 text-white rounded-sm px-4 py-2">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
