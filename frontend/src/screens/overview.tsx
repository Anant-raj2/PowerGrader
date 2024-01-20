import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export const Overview = (): JSX.Element => {
  const { user } = useAuthenticatedUser();

  return (
    <>
      <div className="mt-14">
        <div className="flex flex-wrap ml-22">
          <div className="flex flex-row">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div>
                <p className="font-bold text-gray-400">GPA</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div>
                <p className="font-bold text-gray-400">Weighted GPA</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div>
                <p className="font-bold text-gray-400">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start sm:ml-13 md:ml-13 lg:ml-20">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-13 h-128 rounded-xl w-810 lg:w-150 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Your Overview</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div>
                <p className="font-bold text-gray-400">Best Classes</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg ml-4 h-59 rounded-xl w-full lg:w-96 p-8 pt-9 m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div>
                <p className="font-bold text-gray-400">Worst Classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
