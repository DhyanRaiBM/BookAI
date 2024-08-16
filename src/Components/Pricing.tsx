const Pricing = () => {
  return (
    <div className="max-md:mx-5 dark:text-white p-8 rounded-lg  border border-black dark:border-[#7B8595] shadow-lg max-w-3xl bg-backgroundColor-light2 dark:bg-backgroundColor-dark2">
      <h2 className="text-xl font-semibold mb-2 dark:text-headingColor-dark text-headingColor-light">
        API Pricing
      </h2>
      <p className="mb-6 text-sm">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left overflow-hidden rounded-xl text-sm ">
          <thead>
            <tr className="bg-indigo-500 text-white ">
              <th className="p-3 font-semibold">API</th>
              <th className="p-3 font-semibold">MODEL</th>
              <th className="p-3 font-semibold">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-3">OpenAI</td>
              <td className="p-3">GPT-3.5</td>
              <td className="p-3">$0.002</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">OpenAI</td>
              <td className="p-3">GPT-4</td>
              <td className="p-3">$0.03</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">Together AI</td>
              <td className="p-3">Llama-2-70b</td>
              <td className="p-3">$0.0008</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-3">Together AI</td>
              <td className="p-3">Llama-2-13b</td>
              <td className="p-3">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold  dark:text-headingColor-dark text-headingColor-light ">
          Token Estimation
        </h3>
        <p className="mb-4 text-sm">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>

        <h3 className="text-lg font-semibold  dark:text-headingColor-dark text-headingColor-light">
          Billing
        </h3>
        <p className="text-sm">
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  )
}

export default Pricing
