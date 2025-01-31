package com.dao;

import com.entity.ChongwuzixunEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChongwuzixunVO;
import com.entity.view.ChongwuzixunView;


/**
 * 宠物资讯
 * 
 * @author 
 * @email 
 * @date 2020-11-12 11:19:48
 */
public interface ChongwuzixunDao extends BaseMapper<ChongwuzixunEntity> {
	
	List<ChongwuzixunVO> selectListVO(@Param("ew") Wrapper<ChongwuzixunEntity> wrapper);
	
	ChongwuzixunVO selectVO(@Param("ew") Wrapper<ChongwuzixunEntity> wrapper);
	
	List<ChongwuzixunView> selectListView(@Param("ew") Wrapper<ChongwuzixunEntity> wrapper);

	List<ChongwuzixunView> selectListView(Pagination page,@Param("ew") Wrapper<ChongwuzixunEntity> wrapper);
	
	ChongwuzixunView selectView(@Param("ew") Wrapper<ChongwuzixunEntity> wrapper);
	
}
