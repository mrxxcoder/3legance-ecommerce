import { useSearchParams } from "react-router-dom";

interface IOption {
  value: string;
  label: string;
}

interface IProps {
  filterField: string;
  options: IOption[];
}

function Filter({ filterField, options }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    searchParams.set(filterField, value);
    // if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={filterField}>{filterField}</label>
      <select
        name={filterField}
        id={filterField}
        value={currentFilter}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5 pl-2 pr-24"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            disabled={option.value === currentFilter}
            defaultValue={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
