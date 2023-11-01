import React, { useState, useRef, useEffect } from 'react';
import { PdfViewerComponent } from '@syncfusion/ej2-react-pdfviewer';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(5);
  const [file, setFile] = useState(null);
  const pdfViewerRef = useRef(null);

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  }

  function extractTextCompleted(args) {
    console.log(args.documentTextCollection);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-md w-200">
        <h1 className="text-2xl mb-4">파일 업로드</h1>
        <p className="mb-4">아래의 버튼을 사용하여 파일을 업로드해주세요.</p>
        <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
          파일 선택
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {/* Slider Div */}
        <div className="mt-6">
          <p className="mb-2">문제 수: {sliderValue}</p>
          <input
            type="range"
            min="5"
            max="30"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="w-full"
          />
        </div>

        {/* 시작하기 Button */}
        <div className="mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => pdfViewerRef.current.extractText()}>
            시작하기
          </button>
        </div>

        {/* Hidden PDF Viewer to load and extract text */}
        <div style={{ visibility: 'hidden' }}>
          <PdfViewerComponent
            ref={pdfViewerRef}
            documentPath={file}
            isExtractText={true}
            extractTextCompleted={extractTextCompleted}
          />
        </div>
      </div>
    </div>
  );
}