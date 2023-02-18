import { Entry } from './Entry';

function JudgingForm() {
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold">Beer: placeholder</h2>
      <form className="flex flex-col ">
        <Entry label={'Appearance'} pointValue={10} />
        <Entry label={'Smell'} pointValue={10} />
        <Entry label={'Taste'} pointValue={30} />
        <Entry label={'Aftertaste'} pointValue={20} />
        <Entry label={'Drinkability'} pointValue={30} />
      </form>
      <button className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600">
        Submit
      </button>
    </div>
  );
}
export default function AddJudgmentModal({ open, onClose }) {
  return (
    <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${
          open ? 'opacity-50' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
      />

      {/* content */}
      <div
        className={`fixed right-0 h-full w-full max-w-screen-sm bg-white p-4 shadow-lg${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300 ease-in-out`}
      >
        <div>
          <button
            className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600  "
            onClick={onClose}
          >
            Click to close
          </button>
        </div>
        <JudgingForm onClose={onClose} />
      </div>
    </div>
  );
}

// TODO: get form submitting ratings after voting system is finished
