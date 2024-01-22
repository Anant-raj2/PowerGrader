import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export const Overview = (): JSX.Element => {
  const { user } = useAuthenticatedUser();

  return (
    <>
      <div className="mt-14">
        <div className="flex flex-wrap ml-5 sm:ml-22">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">GPA</p>
                <p className="font-bold gradient-text text-5xl pt-3">4.0</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">
                  Weighted GPA
                </p>
                <p className="font-bold gradient-text text-5xl pt-3">4.20</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">Rating</p>
                <p className="font-bold green-gradient-text text-5xl pt-3">
                  Good
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start sm:ml-13 md:ml-13 lg:ml-20">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-13 h-128 rounded-xl w-810 lg:w-150 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-normal text-gray-400 text-2xl">
                Your Overview
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div>
                <p className="font-bold text-gray-400 text-2xl">Best Classes</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div>
                <p className="font-bold text-gray-400 text-2xl">
                  Worst Classes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
