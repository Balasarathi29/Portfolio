import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <span className="hero-greeting">Portfolio 2026</span>
          <h1 className="hero-title">
            Building digital products
            <br />
            <span className="text-gradient">
              that look sharp and perform faster.
            </span>
          </h1>
          <p className="hero-description">
            I design and develop modern web experiences with a strong balance of
            visual identity, performance, and product thinking.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Let's Collaborate
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-visual"
        >
          {/* Abstract visual representation or 3D element could go here */}
          <div className="code-block glass">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre>
              <code>
                <span className="keyword">const</span>{" "}
                <span className="variable">developer</span> = {"{"}
                {"\n"} <span className="property">focus</span>: [
                <span className="string">'Frontend'</span>,{" "}
                <span className="string">'Backend'</span>,{" "}
                <span className="string">'UX'</span>],
                {"\n"} <span className="property">stack</span>: [
                <span className="string">'React'</span>,{" "}
                <span className="string">'Node.js'</span>,{" "}
                <span className="string">'Express'</span>,{" "}
                <span className="string">'MongoDB'</span>],
                {"\n"} <span className="property">availableForWork</span>:{" "}
                <span className="boolean">true</span>,{"\n"}{" "}
                <span className="property">motto</span>:{" "}
                <span className="string">'Craft with intent'</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
