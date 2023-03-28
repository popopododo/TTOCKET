import addPicture from "../../assets/addPicture.png";
import ipfsCreate from "../../services/ipfsCreate";
import { useRef, useState } from "react";

function SponsorSendPic() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState(addPicture);
  const imgpath = "QmPyEwYDxy1iRdyYezADhC7wTAHVmT64WaLBm9uhdtGmGJ";

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFile = (e.target.files as FileList)[0];

    if (targetFile === undefined) {
      return;
    } else {
      setImages(targetFile);
    }
  };

  const uploadFile = async (event: any) => {
    event.preventDefault();
    try {
      const res = await ipfsCreate.add(images);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getFile = async (event: any) => {
    event.preventDefault();
    setImages(`https://ipfs.io/ipfs/${imgpath}`);
    // try {
    //   const res = await axios.get(`https://ipfs.io/ipfs/${imgpath}`);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={images} alt="addpicture" className="w-24 h-24 mt-5" />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={changeHandler}
      />
      <button onClick={uploadFile}>Upload</button>
      <button onClick={getFile}>가져오기</button>
    </div>
  );
}

export default SponsorSendPic;
