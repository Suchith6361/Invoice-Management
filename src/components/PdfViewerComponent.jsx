// // PdfViewerComponent.js
// import React from 'react';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const PdfViewerComponent = ({ fileUrl }) => {
//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//     return (
//         <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
//             <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//                 <Viewer
//                     fileUrl={fileUrl}
//                     plugins={[defaultLayoutPluginInstance]}
//                 />
//             </Worker>
//         </div>
//     );
// };

// export default PdfViewerComponent;
