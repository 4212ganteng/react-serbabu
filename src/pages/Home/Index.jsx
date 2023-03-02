import QRCode from "react-qr-code";

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
  return (
    <div>
      {datas.map((item) => (
        <QRCode
          value={`ts-product: ${item.alamat},${item.nama}`}
          size={225}
          style={{ margin: 25 }}
        />
      ))}
    </div>
  );
};

export default Home;
