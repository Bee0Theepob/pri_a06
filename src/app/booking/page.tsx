import DateReserve from "@/components/DateReserve";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function BookingPage() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          fullWidth
        />
        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          fullWidth
        />
        <Select
          variant="standard"
          id="venue"
          labelId="venue-label"
          defaultValue=""
          displayEmpty
          fullWidth
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <DateReserve />
        <button
          name="Book Venue"
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        >
          Book Venue
        </button>
      </div>
    </main>
  );
}
