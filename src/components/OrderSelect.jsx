
export const OrderSelect = ({setOrderForm}) => {
  function handleSelectChange(e) {
    if (e.target.value === "") return;
    setOrderForm(e.target.value);
  }
  return (
    <>
      <select onChange={handleSelectChange} className="dark:bg-cardDark dark:text-slate-200 py-3 px-4 mx-4 mb-5 shadow-md dark:shadow-slate-800 shadow-slate-400 text-slate-800 rounded-lg font-semibold lg:h-14 lg:w-56">
        <optgroup>
          <option selected disabled value="">Order By</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
          <option value="lowToHigh">Ascending By Population</option>
          <option value="highToLow">Descending By Population</option>
        </optgroup>
      </select>
    </>
  );
};
