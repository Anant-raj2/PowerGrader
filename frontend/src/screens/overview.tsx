import useAuthenticatedUser from "../hooks/useAuthenticatedUser";

export const Overview = (): JSX.Element => {
  const { user } = useAuthenticatedUser();
  
  return (
    <>
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">GPA:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Weighted GPA:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Class Rank:</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div>
              <p className="font-bold text-gray-400">Rating:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
