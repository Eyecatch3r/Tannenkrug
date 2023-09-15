
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

function PDFViewer({ pdfUrl }) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();
    return (
        <div>
            <Document file={pdfUrl}>
                <Page pageIndex={2} />
            </Document>
        </div>
    );
}

export default PDFViewer;