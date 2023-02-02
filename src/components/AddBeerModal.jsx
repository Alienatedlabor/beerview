import { Entry } from './Entry';

const ModalForm = () => {
  return (
    <div className="flex flex-col justify-center">
      <form>
        <Entry type="text" label="Name" />
        <Entry type="text" label="Brewery" />
        <Entry type="text" label="Style" />
        <Entry type="number" label="ABV" />
      </form>
      <button className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600">
        Submit
      </button>
    </div>
  );
};

export default function AddBeerModal({ open, onClose }) {
  return (
    <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
      {/* backdrop */}
      <div
        className={`fixed inset-0 bg-black ${
          open ? 'opacity-50' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* content */}
      <div
        className={`fixed right-0 h-full w-full max-w-screen-sm bg-white p-4 shadow-lg${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div>
          <button
            className="my-4 border bg-yellow-500 px-6 py-2 hover:bg-yellow-600  "
            onClick={onClose}
          >
            Click to close
          </button>
        </div>
        <ModalForm />
      </div>
    </div>
  );
}