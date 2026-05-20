import icon from "/Paprec_Logo.png";

export default function Header({ title }) {
  return (
    <div className="relative bg-[#003B71] text-white p-6 rounded-2xl shadow mb-6">

      <div className="absolute right-7 top-1/2 -translate-y-1/2 flex flex-col items-center">
        
        <img
          src={icon}
          alt="Paprec Logo"
          className="h-14 object-contain "
        />

        <p className="-mt-4 text-1xl font-bold -ml-11">
          Sens
        </p>

      </div>

      <h1 className="text-3xl md:text-4xl font-bold">
        {title}
      </h1>
    </div>
  );
}