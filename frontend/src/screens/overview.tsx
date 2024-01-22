import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const Overview = (): JSX.Element => {
  const { user } = useAuthenticatedUser();
  const data = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,
    },
    {
      name: 'Page C',
      uv: 2000,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
    },
    {
      name: 'Page F',
      uv: 2390,
    },
    {
      name: 'Page G',
      uv: 3490,
    },
    {
      name: 'Page H',
      uv: 4490,
    },
  ];
  return (
    <>
      <div className="mt-14">
        <div className="flex flex-wrap ml-5 sm:ml-22">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">GPA</p>
                <p className="font-bold gradient-text text-5xl pt-3">{user!.unWeightedGPA}</p>
              </div>
            </div>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full sm:w-96 p-5 sm:p-8 pt-9 m-2 sm:m-5 bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-start justify-center">
              <div className="flex flex-col items-center">
                <p className="font-normal text-gray-400 text-2xl">
                  Weighted GPA
                </p>
                <p className="font-bold gradient-text text-5xl pt-3">{user!.weightedGPA}</p>
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
            <BarChart
            margin={{
              top: 15,
            }}
            width={750}
            height={420}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#89CFF0" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
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
