
const WeatherCard = ({
  date,
  temperature,
  description,
  icon,
}: WeatherCardProps) => {
  console.log(date, temperature, description, icon);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <p className="text-gray-700 font-semibold">{date}</p>
      <img src={icon} alt="Error Loading" className="w-12 h-12 mx-auto" />
      <p className="text-2xl">{temperature}°C</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WeatherCard;
