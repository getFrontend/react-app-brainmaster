import Tagline from "./Tagline";

const Heading = ({ className, title, accent, text, tag, tagAccent }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && (
        <Tagline className="mb-4 md:justify-center">
          {tag}
          {tagAccent && <span className="text-purple-500">{tagAccent}</span>}
        </Tagline>
      )}
      {title && (
        <h2 className="h2">
          {title}
          {accent && <span className="text-purple-500">{accent}</span>}
        </h2>
      )}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
