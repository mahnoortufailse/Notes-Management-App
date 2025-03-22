const FormHeader = ({ title, linkText, linkHref }) => {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto mt-4 h-12"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Login"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-blue-500">
          Or{" "}
          <a href={linkHref} className="font-medium text-blue-500 hover:underline">
            {linkText}
          </a>
        </p>
      </div>
    );
  };
  
  export default FormHeader;
  