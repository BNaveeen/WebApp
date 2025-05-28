import * as XLSX from 'xlsx';

export const getNavigationItems = () => {
  try {
    const workbook = XLSX.readFile('src/assets/data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    
    // Get unique pages from the 'page' column
    const uniquePages = [...new Set(data.map(item => item.page))].filter(Boolean);
    
    return uniquePages.map(page => ({
      title: page,
      path: `/${page.toLowerCase().replace(/\s+/g, '-')}`,
    }));
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return [];
  }
};