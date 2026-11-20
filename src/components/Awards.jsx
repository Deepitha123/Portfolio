import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Awards.css';
import award01 from '../assets/awards/image1.png';
import award02 from '../assets/awards/image2.png';
import award03 from '../assets/awards/image3.png';
import award04 from '../assets/awards/image4.jpeg';
import award05 from '../assets/awards/image5.png';
import award06 from '../assets/awards/image6.jpeg';
import award07 from '../assets/awards/image7.jpeg';
import award08 from '../assets/awards/image8.jpeg';
import award09 from '../assets/awards/image9.jpeg';
import award10 from '../assets/awards/image10.jpeg';
import award11 from '../assets/awards/image11.jpeg';
import award12 from '../assets/awards/image12.jpeg';
import future40 from '../assets/awards/future-4.0.png';

const awards = [
  { id: 1, title: 'Googleathon 2k24', organization: 'GDSC CIT', result: 'Second Place', image: award01 },
  { id: 2, title: 'Perpetual Fest 2024', organization: 'Project Expo, CIT', result: 'Second Place', image: award02 },
  { id: 3, title: 'Ideathon', organization: 'CGC CIT', result: 'First Place', image: award03 },
  { id: 4, title: 'Future 4.0', organization: 'Young Indians & CII, Coimbatore Chapter', result: 'Winner', image: future40, imagePosition: '35% center' },
  { id: 5, title: 'SRTN Regionals', organization: 'VIT', result: 'Confident Speaker', image: award04 },
  { id: 6, title: 'Virtus Codicis Project Expo', organization: 'Sri Eshwar Engineering College', result: 'First Place', image: award05 },
  { id: 7, title: 'HackRush', organization: 'WEC CIT', result: 'Second Place', image: award06 },
  { id: 8, title: "Tech Sculpt' 25", organization: 'IEEE CIT Project Expo', result: 'First Place', image: award07 },
  { id: 9, title: 'Samsung Prism Web Agent Hackathon', organization: '', result: 'Top 10 Finalist', image: award08 },
  { id: 10, title: 'Delta Build 2k26', organization: 'Amrita Vishwa Vidyapeetham', result: 'Finalist', image: award09 },
  { id: 11, title: 'SensAI SDE Hackathon', organization: 'Hyperverge', result: 'Second Place', image: award10 },
  { id: 12, title: 'MEDATHON', organization: 'Ceaser Corp', result: 'Second Place', image: award11 },
  { id: 13, title: 'Caterpillar Tech Challenge 2026', organization: '', result: 'Top 10 Finalist', image: award12 },
];

const Awards = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="awards-section" id="awards">
      <div className="container awards-container">
        <motion.div
          className="awards-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="awards-eyebrow">Milestones & recognition</p>
          <h2 className="section-title">Honors & <span>Awards</span></h2>
        </motion.div>

        <div
          className={`awards-stage ${expanded ? 'is-expanded' : ''}`}
          onClick={() => {
            if (!expanded) setExpanded(true);
          }}
          onKeyDown={(event) => {
            if (!expanded && (event.key === 'Enter' || event.key === ' ')) {
              event.preventDefault();
              setExpanded(true);
            }
          }}
          role={expanded ? undefined : 'button'}
          tabIndex={expanded ? undefined : 0}
          aria-expanded={expanded}
          aria-label={expanded ? 'Pile the achievement cards' : 'Reveal all achievement cards'}
        >
          {awards.map((award, index) => {
            const pileOffset = (index - (awards.length - 1) / 2) * 2.2;
            const pileRotation = (index - (awards.length - 1) / 2) * 1.5;

            return (
              <motion.article
                className="award-card"
                key={award.id}
                initial={false}
                animate={
                  expanded
                    ? { x: 0, y: 0, rotate: 0, scale: 1 }
                    : { x: pileOffset, y: pileOffset * -0.18, rotate: pileRotation, scale: 0.96 }
                }
                transition={{ type: 'spring', stiffness: 170, damping: 20, delay: expanded ? index * 0.025 : 0 }}
              >
                {expanded && (
                  <>
                    <span className="award-grid-line award-grid-left" />
                    <span className="award-grid-line award-grid-right" />
                    <span className="award-grid-line award-grid-top" />
                    <span className="award-grid-line award-grid-bottom" />
                  </>
                )}
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="award-image"
                    style={award.imagePosition ? { objectPosition: award.imagePosition } : undefined}
                  />
                ) : (
                  <div className="award-image award-image-fallback" aria-label="Achievement image unavailable">
                    <span>{String(award.id).padStart(2, '0')}</span>
                  </div>
                )}
                <div className="award-content">
                  <span className="award-result">{award.result}</span>
                  <h3>{award.title}</h3>
                  {award.organization && <p>{award.organization}</p>}
                </div>
              </motion.article>
            );
          })}
        </div>

        {!expanded && (
          <motion.p
            className="reveal-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Tap the stack to reveal
          </motion.p>
        )}
        {expanded && (
          <button type="button" className="pile-again" onClick={() => setExpanded(false)}>
            Back to pile
          </button>
        )}
      </div>
    </section>
  );
};

export default Awards;
