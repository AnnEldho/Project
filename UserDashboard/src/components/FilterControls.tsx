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
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3"
      >
        <option value="">All Cities</option>

        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3"
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
  );
}

export default FilterControls;