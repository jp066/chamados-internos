import { CiCircleRemove } from "react-icons/ci";

export function PreviewImage({ file, setFile }) {
  return (
    <div className="m-7">
      {file && (
        <div
          style={{
            border: "2px solid #cccccc50",
            borderRadius: "8px",
            padding: "10px",
            maxWidth: "300px",
          }}
        >
          <img
            src={file}
            alt="Preview"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <button
            onClick={() => {
              URL.revokeObjectURL(file);
              setFile(null);
            }}
          >
            &nbsp; &nbsp;
            <CiCircleRemove size={30} fontWeight="bold" />
          </button>
        </div>
      )}
    </div>
  );
}
