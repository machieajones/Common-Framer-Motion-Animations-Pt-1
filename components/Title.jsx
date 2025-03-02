const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Title;
