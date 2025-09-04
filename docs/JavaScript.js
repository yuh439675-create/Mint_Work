document.addEventListener('DOMContentLoaded', function() {
  // 使用转义后的完整类名选择器（或简化版本）
  const searchInput = document.querySelector(
    '.flex.items-center.rounded-xl.border.border-gray-200.dark\\:border-white\\/10.bg-background-light.dark\\:bg-background-dark.h-full.w-full.outline-none.text-gray-950\\/50.dark\\:text-white\\/50.tracking-tight.pl-12.pr-14'
  );
  
  // 简化版本（推荐）
  // const searchInput = document.querySelector('input.flex.rounded-xl.pl-12');
  
  if (searchInput) {
    searchInput.placeholder = "搜索文档、API 或常见问题...";
  } else {
    console.log("未找到搜索框元素，请检查选择器是否正确");
  }
});
    