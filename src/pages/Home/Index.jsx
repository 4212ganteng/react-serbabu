import { useRef } from "react";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";

const Home = () => {
  const datas = [
    {
      nama: "anis",
      alamat: "jepara",
      pekerjaan: "wiraswasta",
      kelamin: "laki laki",
      umur: 24,
    },
  ];
  const data = JSON.stringify(datas);

  console.log({ data });
  // buat variables
  const componentRef = useRef();
  return (
    <>
      {/* print */}
      <ReactToPrint
        trigger={() => (
          <button
            type="primary"
            style={{ backgroundColor: "green", borderColor: "green" }}
            shape="round"
          >
            Cetak Barcode
          </button>
        )}
        // componen yang akan di print
        content={() => componentRef.current}
      />

      {/* define komponen yang akan di print dengan memasukan var= ref={componentRef}*/}
      <div ref={componentRef}>
        <h1>hello world</h1>
      </div>
    </>
  );
};

export default Home;
