//import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center m-2">
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-center p-4 rounded-t">
              <p className="text-sm font-semibold text-gray-400">
                Economics CA-1 exam - 20 marks
              </p>
            </div>
            <div className="p-6 space-y-6">

              <div className="border border-white p-4 rounded-md">

                <div
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  1. Full Name <span className="text-red-500">*</span>
                  <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      className="shadow-sm border-b border-gray-300 text-gray-900 text-sm focus:border-b focus:border-gray-300 block w-full p-2.5"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <input
                      type="text"
                      className="shadow-sm border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                </div>

              </div>


              <div className="border-2 border-blue-300 p-4 rounded-md">

                <div
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  2. Which country has the highest population in the world?<span className="text-red-500">*</span>
                  <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" /> India</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>

                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" /> China</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>

                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" /> Europe</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>

                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" /> <i className="text-gray-400">Option 4</i> </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="border border-white p-4 rounded-md">
                <div
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  3. Any 3 reasons for global warming<span className="text-red-500">*</span>
                  <p className="text-xs text-gray-400"> <i>Atleast 3 points expected</i> </p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <input
                      type="text"
                      className="shadow-sm  border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="type here"
                      required
                    />
                  </div>

                </div>

              </div>


              <div className="border border-white p-4 rounded-md">

                <div
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  4. Which countries have have nuclear power?<span className="text-red-500">*</span>
                  <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Romania</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Switzerland</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Antartica</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> China</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> South Africa</span>
                      <span className="text-gray-500">&#10006;</span>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                      <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                        <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> <i className="text-gray-500">Option 6</i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
