interface FilterControlsProps {
  cities: string[];
  companies: string[];
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
}

function FilterControls({
  cities,
  companies,
  selectedCity,
  setSelectedCity,
  selectedCompany,
  setSelectedCompany,
}: FilterControlsProps) {
 return (
  <div className="space-y-4">

    <div>
      <label className="block text-sm text-slate-400 mb-2">
        City
      </label>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="
          w-full
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-xl
          px-4
          py-3
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          hover:border-blue-400
          cursor-pointer
        "
      >
        <option value="">All Cities</option>

        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm text-slate-400 mb-2">
        Company
      </label>

      <select
        value={selectedCompany}
        onChange={(e) =>
          setSelectedCompany(e.target.value)
        }
        className="
          w-full
          bg-slate-800
          border
          border-slate-700
          text-white
          rounded-xl
          px-4
          py-3
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          hover:border-blue-400
          cursor-pointer
        "
      >
        <option value="">All Companies</option>

        {companies.map((company) => (
          <option
            key={company}
            value={company}
          >
            {company}
          </option>
        ))}
      </select>
    </div>

  </div>
);
}

export default FilterControls;