# Project 08 — Earthquake Monitoring Web Application (Algorithm Complexity)

**Repository:** `/Users/user/deteksi-gempa-web/`
**Confidence:** VERIFIED

## Executive Summary

A web application that retrieves and processes earthquake data from the USGS Earthquake API. Compares iterative vs recursive algorithm performance for seismic data analysis. Features Flask REST backend, vanilla JS frontend with Chart.js visualization, gzip-compressed JSON caching, background cache updates, rate limiting, and security headers.

**Period:** November 2025 – January 2026
**Organization:** Telkom University
**Type:** Academic group project (2 members: Alifito Rabbani Cahyono + Nadisha Auliandini Nurhizah)

## Technology Stack (VERIFIED from DOCUMENTATION.md + app.py)

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Python | 3.8+ | Runtime |
| Flask | 3.0+ | Web framework |
| Flask-CORS | — | Cross-origin |
| Flask-Limiter | — | Rate limiting (200/day, 50/hour) |
| Requests | — | USGS API HTTP client |
| Gzip | — | Cache compression |

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Styling + animations |
| JavaScript (ES6+) | DOM manipulation |
| Chart.js | Data visualization |

### Data Source
| Technology | Purpose |
|------------|---------|
| USGS Earthquake API | Real-time seismic data |

## Architecture (VERIFIED from DOCUMENTATION.md)

```
Frontend (HTML/CSS/JS) ↔ HTTP/Flask ↔ Backend (Python)
     │                              │
Browser                      USGS API (REST)
(Chart.js)                              │
                                       Cache (JSON.gz files)
```

## API Endpoints (VERIFIED from `backend/app.py`)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | Dashboard (static HTML) |
| GET | `/analysis` | Analysis tool (static HTML) |
| GET | `/earthquakes?size=&sort=&continent=` | Earthquake data + algorithm analysis |

## Algorithms (VERIFIED from `backend/app.py`)

### Iterative Algorithm (O(n) time, O(1) space)
```python
def analyze_earthquakes_iterative(features):
    # Single loop, accumulates statistics
    # Returns: total, mean, min, max, std_dev, dangerous count, execution_time
```

### Recursive Algorithm (O(n) time, O(n) space)
```python
def analyze_earthquakes_recursive(features, index=0, ...state...):
    # Base case: index >= len(features)
    # Recursive case: process features[index], call with index+1
    # Limited to n ≤ 1200 (stack overflow beyond)
```

### Performance Comparison (VERIFIED from DOCUMENTATION.md)

| Input Size | Iterative | Recursive | Status |
|------------|-----------|-----------|--------|
| n ≤ 100 | ~0.0001s | ~0.0001s | Both OK |
| n = 500 | ~0.001s | ~0.002s | Both OK |
| n = 1,200 | ~0.004s | ~0.015s | Recursive OK |
| n = 2,000 | ~0.008s | Stack Overflow | Recursive fails |
| n = 10,000 | ~0.035s | Stack Overflow | Recursive fails |

## Caching System (VERIFIED from `backend/app.py`)

- **Location:** `cache/` directory
- **Format:** JSON compressed with gzip (`.json.gz`)
- **Duration:** 7200 seconds (2 hours), version v10
- **Compression:** Level 6, tracks compression ratio
- **Background updates:** 3 threads for sizes 5000/10000/20000, intervals 300s/300s/600s
- **Cache stats:** Hits, misses, total_loads, compression_ratio

## Security (VERIFIED from `backend/app.py`)

- **CORS:** Enabled
- **Rate limiting:** 200 requests/day, 50 requests/hour per IP (Flask-Limiter)
- **Security headers:** CSP, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Strict-Transport-Security
- **Input validation:** Size (1-20000), sort (time/magnitude), continent filter

## Personal Contribution (VERIFIED from DOCUMENTATION.md)

- **Role:** Software Architect, QA Engineer, Fullstack Developer & Analytics Engineer
- **Contributions:** Flask backend, algorithm optimization, QA testing, scalability, code quality
- **Group member:** Nadisha Auliandini Nurhizah — Project Manager, UI/UX Designer & Data Scientist

## Interview Preparation — Key Points

1. **Iterative vs recursive:** Same O(n) time complexity, but iterative O(1) space vs recursive O(n) stack space
2. **Stack overflow:** Recursive fails at n > 1,200 due to Python recursion limit (~3,000)
3. **USGS API:** Fetches M ≥ 2.5 earthquakes, batches of 2,000, date-range pagination
4. **Caching:** gzip-compressed JSON, 2-hour TTL, background refresh threads
5. **Rate limiting:** 200/day, 50/hour per IP via Flask-Limiter
6. **Honesty required:** Performance numbers are from documentation, not independently verified
