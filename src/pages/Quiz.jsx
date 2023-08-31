import React, { useState } from 'react';

const questions = [
  {
    question: 'Was ist Machine Learning?',
    options: ['Teilgebiet der Mathematik', 'Teilgebiet der KI', 'Teilgebiet der Physik', 'Teilgebiet der Chemie'],
    correct: 'Teilgebiet der KI',
  },
  {
    question: 'Was ist Supervised Learning?',
    options: ['Überwachtes Lernen', 'Unüberwachtes Lernen', 'Semi-überwachtes Lernen', 'Keine der oben genannten'],
    correct: 'Überwachtes Lernen',
  },
  {
    question: 'Was ist der Hauptvorteil von Machine Learning?',
    options: ['Automatisierung', 'Dateninterpretation', 'Web-Entwicklung', 'Software-Tests'],
    correct: 'Dateninterpretation',
  },
  {
    question: 'Was ist Overfitting?',
    options: ['Unteranpassung', 'Überanpassung', 'Gute Anpassung', 'Keine der oben genannten'],
    correct: 'Überanpassung',
  },
  {
    question: 'Was ist der Unterschied zwischen Supervised und Unsupervised Learning?',
    options: ['Gelabelte Daten', 'Algorithmen-Typ', 'Programmiersprache', 'Keine Unterschiede'],
    correct: 'Gelabelte Daten',
  },
  {
    question: 'Was ist ein Merkmal von Unsupervised Learning?',
    options: ['Gelabelte Daten', 'Nicht gelabelte Daten', 'Overfitting', 'Underfitting'],
    correct: 'Nicht gelabelte Daten',
  },
  {
    question: 'Was ist Regression im Kontext von Machine Learning?',
    options: ['Klassifikation von Daten', 'Vorhersage numerischer Werte', 'Web-Entwicklung', 'Keine der oben genannten'],
    correct: 'Vorhersage numerischer Werte',
  },
  {
    question: 'Welche Art von Lernen benötigt gelabelte Daten?',
    options: ['Supervised Learning', 'Unsupervised Learning', 'Semi-supervised Learning', 'Reinforcement Learning'],
    correct: 'Supervised Learning',
  },
  {
    question: 'Welcher Algorithmus wird oft für Textklassifikation verwendet?',
    options: ['Linear Regression', 'Naive Bayes', 'Decision Trees', 'K-Nearest Neighbors'],
    correct: 'Naive Bayes',
  },
  {
    question: 'Was beschreibt das Mooresche Gesetz?',
    options: ['Verdopplung der Datenmenge', 'Verdopplung der Prozessorleistung', 'Halbierung der Kosten', 'Verdopplung der Netzwerkgeschwindigkeit'],
    correct: 'Verdopplung der Prozessorleistung',
  },
  {
    question: 'Was ist ein Hauptproblem beim Labeln von Daten?',
    options: ['Es ist zeitaufwendig', 'Es ist zu einfach', 'Es ist irrelevant', 'Es ist zu komplex'],
    correct: 'Es ist zeitaufwendig',
  },
  {
    question: 'Was ist ein negativer Aspekt von Machine Learning?',
    options: ['Zu teure Hardware', 'Es kann falsches Wissen generieren', 'Es ist zu einfach zu verstehen', 'Es ist zu schnell'],
    correct: 'Es kann falsches Wissen generieren',
  }
  

];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const nextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedOption('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div>
      {!showResults ? (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </div>
            ))}
          </form>
          <button onClick={nextQuestion}>Weiter</button>
        </div>
      ) : (
        <div>
          <h1>Ergebnisse</h1>
          <p>
            Du hast {score} von {questions.length} Fragen richtig beantwortet.
          </p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
