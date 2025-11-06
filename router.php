<?php
// Simple router for PHP built-in server
// Redirects root to index.htm

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// If requesting root, redirect to index.htm
if ($path === '/' || $path === '') {
    $indexFile = __DIR__ . '/index.htm';
    if (file_exists($indexFile)) {
        require $indexFile;
        exit;
    }
}

// For all other requests, let PHP handle them normally
return false;
