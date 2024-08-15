import React, { useState, useEffect } from 'react';

const VisionPricingCalculator = () => {
  const [model, setModel] = useState('Indicus LLM');
  const [width, setWidth] = useState(1080);
  const [height, setHeight] = useState(1080);
  const [lowRes, setLowRes] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    // This is a placeholder calculation. Replace with actual pricing logic.
    const basePrice = 2.50; // Price per 1M tokens
    const resizedWidth = Math.min(width, 768);
    const resizedHeight = Math.min(height, 768);
    const tiles = Math.ceil(resizedWidth / 512) * Math.ceil(resizedHeight / 512);
    const baseTokens = 85;
    const tileTokens = 170 * tiles;
    const totalTokens = baseTokens + tileTokens;
    return (totalTokens / 1000000) * basePrice;
  };

  useEffect(() => {
    setPrice(calculatePrice());
  }, [width, height, lowRes, model]);

  return (
    <div className="p-4 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-white">Vision Pricing Calculator</h2>
      
      <div className="mb-4">
        <label className="block text-white mb-2">
          Model:
          <select
            className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="GPT-3.5">GPT-3.5</option>
            <option value="GPT-4">GPT-4</option>
            <option value="Llama-2-70b">Llama-2-70b</option>
            <option value="Llama-2-13b">Llama-2-13b</option>
            <option value="Indicus LLM">Indicus LLM</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-1/2 px-2">
          <label className="block text-white mb-2">
            Width:
            <input
              type="number"
              className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              min="1"
            />
          </label>
        </div>
        <div className="w-1/2 px-2">
          <label className="block text-white mb-2">
            Height:
            <input
              type="number"
              className="w-full p-2 mt-1 bg-gray-700 text-white rounded"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              min="1"
            />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center text-white">
          <input
            type="checkbox"
            checked={lowRes}
            onChange={(e) => setLowRes(e.target.checked)}
            className="mr-2"
          />
          Low resolution
        </label>
      </div>

      <div className="text-white mb-4">
        Calculated cost: ${price.toFixed(6)}
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="ml-2 text-white px-2 py-1 rounded"
        >
          ⓘ
        </button>
      </div>

      {showBreakdown && (
        <div className="text-white">
          <h3 className="font-bold mb-2">Price Breakdown:</h3>
          <ul>
            <li>Base price per 1M tokens: $2.50</li>
            <li>Resized dimensions: {Math.min(width, 768)} x {Math.min(height, 768)}</li>
            <li>Total tiles: {Math.ceil(Math.min(width, 768) / 512) * Math.ceil(Math.min(height, 768) / 512)}</li>
            <li>Base tokens: 85</li>
            <li>Tile tokens: 170 * {Math.ceil(Math.min(width, 768) / 512) * Math.ceil(Math.min(height, 768) / 512)}</li>
            <li>Total tokens: {85 + (170 * Math.ceil(Math.min(width, 768) / 512) * Math.ceil(Math.min(height, 768) / 512))}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default VisionPricingCalculator;