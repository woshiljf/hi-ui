import React, { useState } from 'react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';

export interface AlbumProps {
  /**
   * @description       图片详情
   * @default           ''
   */
  content?: string;
  urls: string[];
  width?: number | string;
  height?: number | string;
}
const Album: React.FC<AlbumProps> = ({ content, urls, width, height }) => {
  const [urlsData, setUrlsData] = useState<string[]>(urls);
  const changePic = () => {
    try {
      const reads = new FileReader();
      const file = document.getElementById('file')?.files[0];
      reads.readAsDataURL(file);
      reads.onload = e => {
        setUrlsData((pre: any) => [...pre, e.target?.result]);
      };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p className="content">{content}</p>
      <ul className="container">
        <PhotoProvider maskClassName="mask-color">
          {urlsData?.map(item => (
            <PhotoConsumer key={item} src={item} intro={item}>
              <img src={item} alt="" className="img" style={{ width, height }} />
            </PhotoConsumer>
          ))}
        </PhotoProvider>

        <div className="upload-box" style={{ width: 100, height: 100 }}>
          <label htmlFor="file" id="label">
            <input
              type="file"
              name=""
              className="file"
              id="file"
              accept="image/*"
              onChange={changePic}
              style={{ width: 100, height: 100 }}
            />
          </label>
        </div>
      </ul>
    </>
  );
};
export default Album;
