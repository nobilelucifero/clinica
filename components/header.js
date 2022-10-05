import Logo from "./logo.js";

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div
        className="
       flex
       mx-auto max-w-7xl px-8
         px-8 py-4"
      >
        <div>
          <Logo />
        </div>
        <div className="flex grow"></div>
        {/* <div className="flex items-center mx-auto">
          <label for="countries" className="hidden">
            Select an option
          </label>

          <select
            id="countries"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="UK">UK</option>
            <option value="DE">Germany</option>
            <option value="IT">Italy</option>
          </select>
        </div> */}
      </div>
    </header>
  );
}
