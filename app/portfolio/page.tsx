import Form from "./components/Form";

const Portfolio = () => {
  return (
    <div className="py-20 dark:text-white space-y-10 container mx-auto sm:px-3">
      <div className="text-center">
        <span className="text-4xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 to-pink-600">
          iPortfolio
        </span>
      </div>
      <p className="text-[2.5rem] md:text-[3rem] max-w-2xl mx-auto font-bold text-center leading-10">
        Just type your username and watch the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 to-pink-600">
          magic
        </span>
      </p>
      <Form />
    </div>
  );
};

export default Portfolio;
