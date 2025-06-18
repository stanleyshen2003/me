import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import React from "react";


// Emulate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder to import from
const articlesDir = path.join(__dirname, 'myArticles');

// Read files and dynamically import them
const files = await fs.readdir(articlesDir);

const articlePromises = files
  .filter(file => file.endsWith('.js'))
  .map(file => import(path.join(articlesDir, file)));

const modules = await Promise.all(articlePromises);

// Extract default exports
const articles = modules.map(mod => mod.default);
console.log('Articles loaded:', articles.length);
// Export the list
export default articles;
