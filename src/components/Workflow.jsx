import React from 'react';

const steps = [
  { num: '1', title: 'Open and Analyze', desc: 'Opens via Express Add-on panel. Reads canvas Document API in real time. Generates instant heatmap and cognitive score.' },
  { num: '2', title: 'Select Target Audience', desc: 'Choose a demographic from the persona library. The cognitive analysis instantly recalibrates for that specific audience segment.' },
  { num: '3', title: 'Review Cognitive Intelligence', desc: 'Read the five-layer analysis showing specific element-level issues with science-backed rationale on viewer perception.' },
  { num: '4', title: 'Optimize in One Click', desc: 'NeuroLens generates 3-5 variants inside Express on new pages, tuning positions, colors, and fonts based on computational neuroaesthetics.' },
  { num: '5', title: 'Publish with Confidence', desc: 'Export the optimized design knowing it is scientifically tuned for the target audience and platform algorithm.' },
];

const Workflow = () => {
  return (
    <section className="section container">
      <div className="grid-2">
        <div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Under 5 Minutes. <br /><span className="text-gradient">Zero Configuration.</span></h2>
          <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>
            What previously required a $10,000/month neuromarketing agency or days of post-publish analytics is now available in real time.
          </p>
        </div>
        
        <div>
          {steps.map((step) => (
            <div className="workflow-step" key={step.num}>
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
