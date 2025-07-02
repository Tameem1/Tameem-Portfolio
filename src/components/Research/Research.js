import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Badge } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AiOutlineFilePdf, AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaUsers } from "react-icons/fa";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Research() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Research papers data
  const researchPapers = [
    {
      id: 1,
      title: "Gulf Arabic Diacritization: Guidelines, Initial Dataset, and Results",
      authors: "Nouf Alabbasi, Mohamed AlBadrashiny, Maryam Aldahmani, Ahmed AlDhanhani, Abdullah Saleh Alhashmi, Fawaghy Alhashmi, Khalid Al Hashemi, Rama Alkhobbi, Shamma AlMaazmi, Mohammed Alyafeai, Mariam M. Alzaabi, Mohamed Alzaabi, Fatma Badri, Kareem Darwish, Ehab Mansour Diab, Muhammad Elmallah, Amira Elnashar, Ashraf Elneima, MHD Tameem Kabbani, Nour Rabih, Ahmad Saad, Ammar Mamoun Sousou",
      conference: "WANLP 2022 - The Seventh Arabic Natural Language Processing Workshop",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2022",
      abstract: "Arabic diacritic recovery is important for a variety of downstream tasks such as text-to-speech. In this paper, we introduce a new Gulf Arabic diacritization dataset composed of 19,850 words based on a subset of the Gumar corpus. We provide a comprehensive set of guidelines for diacritization to enable the diacritization of more data. We also report on diacritization results based on the new corpus using a word-based Hidden Markov Model and a character-based sequence to sequence model.",
      keywords: ["Arabic NLP", "Diacritization", "Gulf Arabic", "Hidden Markov Model", "Sequence to Sequence", "Dataset"],
      pdfPath: "/research-papers/2022.wanlp-1.33-2.pdf",
      doi: "10.18653/v1/2022.wanlp-1.33",
      citations: 3,
      impact: "",
      achievements: [
        "📚 First comprehensive Gulf Arabic diacritization dataset",
        "📋 Comprehensive diacritization guidelines",
        "🔬 Novel dataset of 19,850 words from Gumar corpus",
        "📊 Comparative analysis of HMM and Seq2Seq approaches"
      ],
      methodology: [
        "Word-based Hidden Markov Model approach",
        "Character-based sequence to sequence model",
        "Gumar corpus subset analysis",
        "Comprehensive diacritization guidelines development"
      ],
      results: {
        datasetSize: "19,850 words",
        corpus: "Gumar corpus subset",
        models: "HMM + Seq2Seq",
        evaluation: "Comparative analysis"
      }
    },
    {
      id: 2,
      title: "AraDiCE: Benchmarks for Dialectal and Cultural Capabilities in LLMs",
      authors: "Basel Mousi, Nadir Durrani, Fatema Ahmad, Md. Arid Hasan, Maram Hasanain, Tameem Kabbani, Fahim Dalvi, Shammur Absar Chowdhury, Firoj Alam",
      conference: "COLING 2025 - 31st International Conference on Computational Linguistics",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2025",
      abstract: "Arabic, with its rich diversity of dialects, remains significantly underrepresented in Large Language Models, particularly in dialectal variations. We address this gap by introducing seven synthetic datasets in dialects alongside Modern Standard Arabic (MSA), created using Machine Translation (MT) combined with human post-editing. We present AraDiCE, a benchmark for Arabic Dialect and Cultural Evaluation. We evaluate LLMs on dialect comprehension and generation, focusing specifically on low-resource Arabic dialects. Additionally, we introduce the first-ever fine-grained benchmark designed to evaluate cultural awareness across the Gulf, Egypt, and Levant regions, providing a novel dimension to LLM evaluation.",
      keywords: ["Large Language Models", "Arabic Dialects", "Cultural Evaluation", "Machine Translation", "Benchmark", "Low-resource NLP"],
      pdfPath: "/research-papers/2025.coling-main.283.pdf",
      doi: "10.18653/v1/2025.coling-main.283",
      citations: 7,
      impact: "",
      achievements: [
        "🏆 First-ever Arabic dialect and cultural evaluation benchmark",
        "📊 Seven synthetic datasets across Arabic dialects",
        "🌍 Cultural awareness evaluation across Gulf, Egypt, and Levant",
        "🤖 Comprehensive LLM evaluation on dialectal tasks"
      ],
      methodology: [
        "Machine Translation with human post-editing",
        "Seven synthetic dialect datasets creation",
        "Cultural awareness benchmark development",
        "LLM evaluation on dialect comprehension and generation"
      ],
      results: {
        datasets: "7 synthetic dialect datasets",
        samples: "≈45K post-edited samples",
        regions: "Gulf, Egypt, Levant",
        models: "Jais, AceGPT, multilingual models"
      }
    },
    {
      id: 3,
      title: "Arabic Diacritics in the Wild: Exploiting Opportunities for Improved Diacritization",
      authors: "Salman Elgamal, Ossama Obeid, Tameem Kabbani, Go Inoue, Nizar Habash",
      conference: "arXiv Preprint",
      venue: "arXiv",
      year: "2024",
      abstract: "The widespread absence of diacritical marks in Arabic text poses a significant challenge for Arabic natural language processing (NLP). This paper explores instances of naturally occurring diacritics, referred to as 'diacritics in the wild,' to unveil patterns and latent information across six diverse genres: news articles, novels, children's books, poetry, political documents, and ChatGPT outputs. We present a new annotated dataset that maps real-world partially diacritized words to their maximal full diacritization in context. Additionally, we propose extensions to the analyze-and-disambiguate approach in Arabic NLP to leverage these diacritics, resulting in notable improvements.",
      keywords: ["Arabic Diacritics", "Natural Language Processing", "Dataset", "Genre Analysis", "Analyze-and-Disambiguate", "Open Source"],
      pdfPath: "/research-papers/2406.05760v1-2.pdf",
      doi: "10.48550/arXiv.2406.05760",
      citations: 3,
      impact: "",
      achievements: [
        "🔍 First analysis of 'diacritics in the wild' across 6 genres",
        "📚 New annotated dataset for partial diacritization",
        "⚡ Extended analyze-and-disambiguate approach",
        "🌐 Open source code and datasets released"
      ],
      methodology: [
        "Analysis across six diverse genres",
        "Annotated dataset creation for partial diacritization",
        "Extended analyze-and-disambiguate approach",
        "Real-world diacritics pattern analysis"
      ],
      results: {
        genres: "6 diverse genres analyzed",
        dataset: "New annotated dataset",
        approach: "Extended analyze-and-disambiguate",
        availability: "Open source code and datasets"
      }
    }
  ];

  const handleViewDetails = (paper) => {
    setSelectedPaper(paper);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPaper(null);
  };

  const handleViewPdf = (paper) => {
    setSelectedPaper(paper);
    setShowPdfModal(true);
    setPageNumber(1);
  };

  const handleClosePdfModal = () => {
    setShowPdfModal(false);
    setSelectedPaper(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'success';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'primary';
    }
  };

  return (
    <Container fluid className="research-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">Research </strong> Publications
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
              My research focuses on Arabic Natural Language Processing, particularly in the areas of text diacritization, 
              dialect processing, and neural network architectures. Here are my published papers and ongoing research.
            </p>
          </Col>
        </Row>

        <Row className="research-cards-row">
          {researchPapers.map((paper) => (
            <Col md={6} lg={4} className="research-card-col" key={paper.id}>
              <Card className="research-card-view">
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {paper.title}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong>Authors:</strong> {paper.authors}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong>Conference:</strong> {paper.conference}
                  </Card.Text>
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong>Year:</strong> {paper.year}
                  </Card.Text>
                  
                  <div className="research-badges">
                    <Badge bg={getImpactColor(paper.impact)} className="me-2">
                      {paper.impact} Impact
                    </Badge>
                    <Badge bg="info" className="me-2">
                      {paper.citations} Citations
                    </Badge>
                  </div>

                  <div className="research-actions">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="research-action-btn"
                      onClick={() => handleViewDetails(paper)}
                    >
                      <AiOutlineEye /> View Details
                    </Button>
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="research-action-btn"
                      onClick={() => handleViewPdf(paper)}
                    >
                      <AiOutlineFilePdf /> View PDF
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Research Details Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        className="research-detail-modal"
      >
        <Modal.Header closeButton className="research-detail-header">
          <Modal.Title className="research-detail-title">
            {selectedPaper?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="research-detail-body">
          {selectedPaper && (
            <div className="research-detail-content">
              <div className="research-meta">
                <p><strong><FaUsers /> Authors:</strong> {selectedPaper.authors}</p>
                <p><strong><FaUniversity /> Conference:</strong> {selectedPaper.conference}</p>
                <p><strong><FaGraduationCap /> Venue:</strong> {selectedPaper.venue}</p>
                <p><strong><FaCalendarAlt /> Year:</strong> {selectedPaper.year}</p>
                <p><strong>DOI:</strong> <a href={`https://doi.org/${selectedPaper.doi}`} target="_blank" rel="noopener noreferrer">{selectedPaper.doi}</a></p>
              </div>

              <div className="research-abstract">
                <h5>Abstract</h5>
                <p>{selectedPaper.abstract}</p>
              </div>

              <div className="research-keywords">
                <h5>Keywords</h5>
                <div className="keyword-badges">
                  {selectedPaper.keywords.map((keyword, index) => (
                    <Badge key={index} bg="secondary" className="me-1 mb-1">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="research-achievements">
                <h5>Key Achievements</h5>
                <ul className="achievements-list">
                  {selectedPaper.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="research-methodology">
                <h5>Methodology</h5>
                <ul className="methodology-list">
                  {selectedPaper.methodology.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </div>

                             <div className="research-results">
                 <h5>Key Results</h5>
                 <Row>
                   {selectedPaper.results.datasetSize && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Dataset Size:</strong> {selectedPaper.results.datasetSize}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.corpus && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Corpus:</strong> {selectedPaper.results.corpus}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.models && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Models:</strong> {selectedPaper.results.models}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.evaluation && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Evaluation:</strong> {selectedPaper.results.evaluation}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.datasets && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Datasets:</strong> {selectedPaper.results.datasets}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.samples && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Samples:</strong> {selectedPaper.results.samples}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.regions && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Regions:</strong> {selectedPaper.results.regions}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.genres && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Genres:</strong> {selectedPaper.results.genres}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.dataset && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Dataset:</strong> {selectedPaper.results.dataset}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.approach && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Approach:</strong> {selectedPaper.results.approach}
                       </div>
                     </Col>
                   )}
                   {selectedPaper.results.availability && (
                     <Col md={6}>
                       <div className="result-item">
                         <strong>Availability:</strong> {selectedPaper.results.availability}
                       </div>
                     </Col>
                   )}
                 </Row>
               </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="research-detail-footer">
          <div className="research-actions">
            <Button
              variant="outline-success"
              onClick={() => handleViewPdf(selectedPaper)}
            >
              <AiOutlineFilePdf /> View PDF
            </Button>
            <Button variant="outline-secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* PDF Viewer Modal */}
      <Modal
        show={showPdfModal}
        onHide={handleClosePdfModal}
        size="xl"
        className="pdf-viewer-modal"
      >
        <Modal.Header closeButton className="pdf-viewer-header">
          <Modal.Title className="pdf-viewer-title">
            {selectedPaper?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pdf-viewer-body">
          <div className="pdf-controls mb-3">
            <Button
              variant="outline-primary"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="me-2"
            >
              Previous
            </Button>
            <span className="pdf-page-info">
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </span>
            <Button
              variant="outline-primary"
              disabled={numPages ? pageNumber >= numPages : false}
              onClick={nextPage}
              className="ms-2"
            >
              Next
            </Button>
          </div>
          <div className="pdf-container">
            <Document
              file={selectedPaper?.pdfPath}
              onLoadSuccess={onDocumentLoadSuccess}
              loading="Loading PDF..."
            >
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth > 768 ? 600 : window.innerWidth - 100}
                loading="Loading page..."
              />
            </Document>
          </div>
        </Modal.Body>
        <Modal.Footer className="pdf-viewer-footer">
          <Button variant="outline-secondary" onClick={handleClosePdfModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Research; 