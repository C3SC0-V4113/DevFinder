import { useDevs } from "@/hooks/useDevs";
import { Formik } from "formik";

export const DevInput = () => {
  const { startGettingUser } = useDevs();
  return (
    <div className="pt-7 pb-7 w-full">
      <Formik
        initialValues={{ developer: "" }}
        onSubmit={(value) => {
          startGettingUser(value.developer);
        }}
      >
        {({ values, handleChange, isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  disabled
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="developer"
                className="h-12 w-full py-2 text-sm text-gray-800 bg-white rounded-md pl-10 focus:outline-none focus:bg-white"
                placeholder="Search GitHub username..."
                autoComplete="off"
                onChange={handleChange}
                value={values.developer}
              />
              <button
                type="submit"
                className="absolute h-10 inset-y-1 right-2 bg-blue-600 rounded text-gray-50 p-2 flex items-center"
              >
                Search
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
